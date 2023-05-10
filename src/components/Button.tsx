interface buttonInterface {
  text: String;
  onClick?: () => void;
}
export default function Button({ text }: buttonInterface) {
  return (
    <button className=" w-56 rounded-xl focus:outline-1  focus:outline-white hover:bg-transparent border border-secondaryColor hover:text-white py-2 bg-secondaryColor text-lg font-bold">
      {text}
    </button>
  );
}
