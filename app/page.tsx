import { createClient } from "next-sanity";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
import Cases from "@/components/sections/cases";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Faq from "@/components/sections/faq";
import Reviews from "@/components/sections/reviews";
import Quiz from "@/components/sections/quiz";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Modals from "@/components/modals";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

export interface SanitySection {
  _type: string;
  _key: string;
  [key: string]: any;
}

interface PageData {
  headerConfig: any;
  sections: SanitySection[];
  footerConfig: any;
}

async function getModalsData(): Promise<any> {
  const query = `{
    "contact": *[_type == "modalContact"][0],
    "discuss": *[_type == "modalDiscuss"][0],
    "reels": *[_type == "modalReels"][0],
    "audit": *[_type == "modalAudit"][0] {
      ...,
      "steps": steps[] {
        ...,
        "options": options[]
      }
    }
  }`;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Sanity Modals Fetch Error:", error);
    return null;
  }
}

// "headerData": headerConfig->{
//     ...,
//     "logoUrl": logo.asset->url
//   },
//   "footerData": footerConfig->{
//     ...,
//     "menu": menu[] {
//       label,
//       "target": target
//     }
//   },

async function getPageData(slug: string): Promise<PageData | null> {
  const query = `*[_type == "page" && slug.current == $slug][0]{
 ...,
  headerConfig->,
  footerConfig->,
  "sections": sections[]->{ 
    ...,
    _type == "quiz" => {
      ...,
      "imageUrls": images[].asset->url
    },

    _type == "hero" => {
      ...,
      "videoUrl": video.asset->url
    },

    _type == "servicesSection" => {
      ...,
      "servicesList": servicesList[]->  {
  ...,
      "img": img.asset->url,
      }
    },

    _type == "pricingSection" => {
  ...,
    "pricingList": pricingList[]-> { 
    ...,
    "image": image.asset->url
     } 
    },

  _type == "casesSection" => {
    ...,
    "casesList":casesList[]-> {
    ...,
      "videoSrc": video.asset->url,
      "previewUrl": previewImage.asset->url 
      }
  },
  _type == "processSection" => {
    ...,
    "stepsList":stepsList[]-> {
      ...,
      "icon": icon.asset->url
    }
  },
    _type == "faqSection" => {
    ...,
    "faqList":faqList[]-> {
      ...
    }
  },
  _type == "reviewsSection" => {
    ...,
    "reviewsList":reviewsList[]-> {
    ...,
      "id": _id,
      "companyImg": companyImg.asset->url,
      "authorAvatar": authorAvatar.asset->url,
      "videoSrc": video.asset->url, 
      "videoPrev": videoPrev.asset->url,
      }
  }
  }
}`;
  return await client.fetch(query, { slug });
}
export default async function Home() {
  const [data, modalsData] = await Promise.all([
    getPageData("index"),
    getModalsData(),
  ]);

  if (!data?.sections) return null;

  const advantagesData = data.sections.find(
    (s) => s._type === "advantagesSection",
  );
  console.log(data);

  return (
    <>
      <Header data={data.headerConfig} />
      {data.sections.map((section, index) => {
        const sectionKey = section._key || `${section._type}-${index}`;
        switch (section._type) {
          case "hero":
            return (
              <Hero
                key={sectionKey}
                data={section}
                advantagesData={advantagesData}
              />
            );
          case "aboutSection":
            return <About key={sectionKey} data={section} />;
          case "servicesSection":
            return <Services key={sectionKey} data={section} />;
          case "pricingSection":
            return <Pricing key={sectionKey} data={section} />;
          case "quiz":
            return <Quiz key={sectionKey} data={section} />;
          case "casesSection":
            return <Cases key={sectionKey} data={section} />;
          case "processSection":
            return <Process key={sectionKey} data={section} />;
          case "reviewsSection":
            return <Reviews key={sectionKey} data={section} />;
          case "faqSection":
            return <Faq key={sectionKey} data={section} />;
          default:
            return null;
        }
      })}
      <Modals data={modalsData} />
      <Footer data={data.footerConfig} />
    </>
  );
}
