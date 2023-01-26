import { DatasType } from "@/shared/types";

type Props = {
    item: DatasType;
}

const Class = ({item}: Props) => {
  const overlayStyles = `p-5 absolute z-20 flex flex-col h-[380px] w-[450px] items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]" >
        <div className={overlayStyles}>
            <p className="text-2xl font-bold">{item.name}</p>
            <p className="mt-5">{item.description}</p>
        </div>
        <img src={item.image} alt='training-graphics' />
    </li>
  );
}

export default Class;