import Image from "next/image";
import Button from "../ui/button";
import {
  kitchenLeftCenter,
  kitchenRightTop,
} from "@/assets/images/kitchen/kitchen";

export default function Kitchen() {
  return (
    <section className="px-[8vw] md:px-[12vw] 2xl:px-[16vw] py-[1in] lg:py-[2in] flex flex-col md:grid grid-cols-2 gap-16 md:gap-32 md:items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl xl:text-3xl mb-4 select-none">
          Odkryj kolekcje{" "}
          <div className="inline-block after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[75%] after:transition-all hover:after:max-w-[50%] after:ml-auto">
            <span>kuchni klasycznej</span>
          </div>{" "}
          zdobionej elementami LOFT
        </h2>
        <p className="text-sm text-[#0C1611]/80">
          Nasza najnowsza kolekcja kuchni to połączenie elegancji klasycznych
          wzorów z industrialnymi akcentami LOFT. Jasne kolory i proste formy
          mebli tworzą harmonijną kompozycję, która nie tylko przyciąga uwagę,
          ale także przyczynia się do uczucia ładu i porządku w Twoim wnętrzu.
        </p>
        <p className="text-sm text-[#0C1611]/80">
          Dzięki starannemu wykonaniu i dbałości o każdy detal, nasze kuchnie
          klasyczne z elementami LOFT stanowią idealne połączenie stylu i
          funkcjonalności. Wybierając nasze meble, inwestujesz w jakość i
          trwałość, które przetrwają przez lata.
        </p>
        <Button className="mt-4 w-max" variant="secondary">
          Pokaż więcej zdjęć
        </Button>
      </div>
      <div className="grid grid-rows-[3rem_1fr_1fr_1rem] grid-cols-[1fr_3rem_2fr] gap-4">
        {/* <div className="col-[2/4] row-[1/3] h-full w-full relative"> */}
        <Image
          objectFit="cover"
          className="col-[2/4] row-[1/3]"
          src={kitchenRightTop}
          alt="Kitchen Picture"
        />
        {/* </div> */}
        {/* <div className="col-[1/3] row-[2/4] h-full w-full relative"> */}
        <Image
          objectFit="cover"
          className="col-[1/3] row-[2/4]"
          src={kitchenLeftCenter}
          alt="Kitchen Picture"
        />
        {/* </div> */}
        {/* <div className="col-[3/4] row-[3/5] h-full w-full relative"> */}
        <Image
          objectFit="cover"
          className="col-[3/4] row-[3/5]"
          src={kitchenRightTop}
          alt="Kitchen Picture"
        />
        {/* </div> */}
      </div>
    </section>
  );
}
