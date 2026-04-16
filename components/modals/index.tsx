"use client";
import AuditModal from "./auditModal";
import ContactModal from "./contactModal";
import DiscussModal from "./discussModal";
import ReelsGiftModal from "./reelsGiftModal";

interface ModalsProps {
  data: {
    contact?: any;
    discuss?: any;
    reels?: any;
    audit?: any;
  };
}

export default function Modals({ data }: ModalsProps) {
  return (
    <>
      <ContactModal data={data?.contact} />
      <DiscussModal data={data?.discuss} />
      <AuditModal sanityData={data?.audit} />
      <ReelsGiftModal data={data?.reels} />
    </>
  );
}
