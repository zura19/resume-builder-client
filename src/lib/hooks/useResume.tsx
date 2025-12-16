import { usePDF } from "react-to-pdf";

export default function useResume() {
  const fileName = "resume" + "-" + new Date().getTime();
  const { toPDF, targetRef } = usePDF({ filename: fileName });

  const handleDownload = async () => {
    await document.fonts.ready;
    toPDF();
  };

  return {
    handleDownload,
    targetRef,
  };
}
