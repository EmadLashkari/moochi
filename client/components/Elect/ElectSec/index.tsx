import { BoxRow } from "@/utils/custom";
import ElectComp from "../ElectComp";

function ElectSec() {
  return (
    <>
      <BoxRow
        sx={{
          width: "100svw",
          height: { xs: "1500px", md: "500px" },
          minHeight: { xs: "1500px", md: "500px" },
          p: 2,
          gap: 2,
          bgcolor: "primary.main",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        <ElectComp />
        <ElectComp />
        <ElectComp />
      </BoxRow>
    </>
  );
}

export default ElectSec;
