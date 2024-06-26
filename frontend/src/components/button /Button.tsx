export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  isNonSubmit?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  isNonSubmit,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={isNonSubmit ? "button" : "submit"}
      className="bg-blue-500 hover:bg-blue-700 text-[2vw] md:text-[1vw] text-white p-[2vw] md:p-[1vw] rounded-[0.4vw]"
    >
      {children}
    </button>
  );
};
