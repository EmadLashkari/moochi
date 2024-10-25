import { BoxRow } from "@/utils/custom";
import ElectComp from "../ElectComp";

function ElectSec() {
  return (
    <>
      <BoxRow
        sx={{
          width: "100svw",
          minWidth: "100svw",
          height: "564px",
          minHeight: "564px",
          p: 5,
          gap: 5,
          overflowX: { xs: "scroll", md: "unset" },
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
