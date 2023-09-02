"use client";

import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber }: { pageNumber: number }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      <CustomButton
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    </div>
  );
};

export default ShowMore;
