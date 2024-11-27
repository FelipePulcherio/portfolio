interface CustomButtonProps {
  id?: string;
  text: string;
  customClasses?: string;
  border?: boolean;
  customFunction: () => void;
}

export default function CustomButton({
  id,
  text,
  customClasses,
  border,
  customFunction,
}: CustomButtonProps): JSX.Element {
  return (
    <button
      id={id}
      className={
        `button font-black tracking-wide text-inherit transition-colors duration-200 py-[10px] px-[15px] lg:tracking-wider ` +
        customClasses +
        (border && ' border-2 rounded-[5px] ')
      }
      onClick={customFunction}
    >
      {text}
    </button>
  );
}
