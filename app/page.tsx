
import TextPressure from "@/components/common/TextPressure";
import CenteredLayout from "@/components/layout/CenterdLayout";

export default function Home() {
  return (
    <CenteredLayout>
      <TextPressure
        text="Under construction"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#000000"
        strokeColor="#ffffff"
        minFontSize={36}
      />
    </CenteredLayout>
  );
}
