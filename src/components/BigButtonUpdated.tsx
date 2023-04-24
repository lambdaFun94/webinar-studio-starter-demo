export interface BigButtonUpdatedProps {
  title?: string;
  link?: string;
}

export const initialProps: BigButtonUpdatedProps = {
  title: "Blank",
  link: "#",
};

const BigButtonUpdated = ({ title, link }: BigButtonUpdatedProps) => {
  return (
    <div className="mt-10">
      <a href={link}
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-200 py-3 px-8 text-base font-medium text-white"
      >
        {title}
      </a>
    </div>
  );
};

export default BigButtonUpdated;