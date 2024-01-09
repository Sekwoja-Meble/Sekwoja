import StarIcon from "@/assets/icons/star";
import { OPINIONS } from "@/const/opinions";
import Link from "next/link";

export default function Opinions() {
  return (
    <section className="bg-background-dark px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] flex flex-col gap-4">
      <h2 className="font-medium text-2xl xl:text-3xl text-white">
        Co mowią o nas klienci
      </h2>
      <p className="text-white/80 text-sm">
        Lorem ipsum dolor sit amet consectetur. Nam gravida lacinia nisl eu
        nulla pretium maecenas eget pulvinar.
      </p>
      <div className="mt-8 flex flex-col gap-6 lg:grid grid-cols-3">
        {OPINIONS.map((opinion, i) => (
          <OpinionRef {...opinion} key={`opinion:${i}`} />
        ))}
      </div>
      <Link
        className="mt-8 w-max text-white after:block after:h-[1px] after:bg-primary after:w-full after:max-w-[25%] after:transition-all hover:after:max-w-[50%] after:ml-auto"
        href="/"
      >
        Zobacz wszystkie opinie google
      </Link>
    </section>
  );
}

function OpinionRef({ content, author, rating }: Opinion) {
  return (
    <div className="bg-secondary-dark rounded px-8 pb-10 pt-8 flex flex-col gap-4">
      <span className="text-primary text-4xl leading-none h-[24px]">“</span>
      <blockquote className="text-sm text-white/80">{content}</blockquote>
      <div className="flex items-center justify-between gap-4 flex-wrap mt-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full h-8 w-8 bg-background-dark"></div>
          <span className="text-[12px] text-white">{author}</span>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon />
          <span className="text-[12px] text-white font-medium">{rating}</span>
        </div>
      </div>
    </div>
  );
}
