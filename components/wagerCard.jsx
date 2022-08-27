import React from "react";
import { Skeleton } from "@mui/material";
import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
// import AspectRatio from '@mui/joy/AspectRatio';

export const WagerCard = ({ cardObject }) => {
  return (
    <React.Fragment>
      <div className="w-[2/3] p-5 ">
        {cardObject === undefined ? (
          <React.Fragment>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="rectangular" className={"h-[257px]"} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="mobile:flex flex-col text-center desktop:pt-6 ">
              <div className="mobile:flex flex-col laptop:flex flex-row items-center justify-center">
                <div className="mobile:flex flex-col items-center desktop:pt-6 space-y-4">
                  <h3 className="font-bold font-SG mobile:text-center laptop:text-[35px] desktop:text-[24px]">
                    {cardObject.name}
                  </h3>
                  <p className="font-normal font-Inter mobile:text-center laptop:text-[25px] desktop:text-[20px]">
                    ID:{cardObject.sku}
                  </p>
                  <h3 className="font-Inter mobile:text-[18px] font-medium">
                    Condition: Resell Price {">"} $400<br></br> Closes:
                    08/20/2022 12:00 PM EST
                  </h3>
                  <h3 className="font-Inter mobile:text-[25px] font-medium flex flex-row justify-center">
                    Price : 50¢
                    <Tooltip
                      title="Pre-Release contracts are 50¢ regardless of Condition Type"
                      arrow
                    >
                      <InfoIcon sx={{ fontSize: "18px" }} />
                    </Tooltip>
                  </h3>
                </div>
                <img
                  src={cardObject.image?.original}
                  className="object-cover mobile:h-[200px] mb-4 tablet:h-[250px] laptop:h-[200px] desktop:h-[250px] w-[300px] pt-4"
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
