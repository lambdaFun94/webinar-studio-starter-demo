export interface BigButtonProps {
  title?: string;
  link?: string;
}

export const initialProps: BigButtonProps = {
  title: "Blank",
  link: "#",
};

const BigButton = ({ title, link }: BigButtonProps) => {
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

export default BigButton;
