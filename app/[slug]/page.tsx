import { createClient } from "next-sanity";
import HeroSection from "@/components/sections/hero-page";
import AboutPage from "@/components/sections/about-page";
import Gallery from "@/components/sections/gallery";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Projects from "@/components/sections/cases";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

const sectionComponents: Record<string, React.ElementType> = {
  secondHero: HeroSection,
  secondAbout: AboutPage,
  gallerySection: Gallery,
  casesRef: Projects,
};

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      ...,
      "headerData": headerConfig->{
    ...,
    "logoUrl": logo.asset->url
  },
  "footerData": footerConfig->{
      ...
    },
      sections[]{
        ...,
        _type == "casesRef" => {
        ...,
        "casesList": casesList[]->{
          ...,
          "videoSrc": video.asset->url,
          "previewUrl": previewImage.asset->url
        }
      },
        _type == "secondHero" => {
          ...,
          "bgImage": bgImage{asset->{url}}
        },
        _type == "secondAbout" => {
          ...,
          "image": image{asset->{url}}
        },
        _type == "gallerySection" => {
          ...,
          "images": images[]{asset->{url}}
        }
      }
    }`,
    { slug },
    { next: { revalidate: 0 } },
  );
  if (!page) return notFound();
  return (
    <>
      <Header data={page.headerData} />

      {page.sections?.map((section: any, index: number) => {
        const Component = sectionComponents[section._type];

        if (!Component) return null;
        return <Component key={section._key || index} data={{ ...section }} />;
      })}
      <Footer data={page.footerData} />
    </>
  );
}
