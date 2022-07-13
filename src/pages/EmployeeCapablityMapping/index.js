import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Stack,
  Input,
  Line,
  List,
} from "components";

const EmployeeCapablityMappingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-start justify-start mx-[auto] lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:pl-[38px] xl:pl-[44px] pl-[50px] 3xl:pl-[60px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
            <Image
              src={"images/img_image2_1.png"}
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
            <Image
              src={"images/img_vector_9.png"}
              className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[1004px] ml-[1129px] 3xl:ml-[1355px] lg:ml-[878px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[2%]"
              alt="Vector"
            />
            <Button className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
              <Image
                src={"images/img_group99_1.png"}
                className="w-[72%] flex items-center justify-center"
                alt="Group99"
              />
            </Button>
          </Row>
        </header>
        <Stack className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] w-[100%]">
          <Row className="absolute bg-gray_101 border border-gray_300 border-solid items-center justify-end lg:pr-[38px] xl:pr-[44px] pr-[50px] 3xl:pr-[60px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[100%]">
            <Image
              src={"images/img_vector_10.png"}
              className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
              alt="Vector"
            />
            <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
              Dashboard
            </Text>
            <Image
              src={"images/img_vector_11.png"}
              className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[2%]"
              alt="Vector"
            />
            <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
              Employee List
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal font-sourcesanspro p-[0] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              WrapClassName="3xl:ml-[744px] 3xl:pl-[12px] 3xl:pr-[26px] 3xl:py-[12px] border border-gray_400 border-solid flex lg:ml-[482px] lg:pl-[7px] lg:pr-[17px] lg:py-[7px] ml-[620px] pl-[10px] pr-[22px] py-[10px] rounded-radius4 w-[25%] xl:ml-[551px] xl:pl-[8px] xl:pr-[19px] xl:py-[8px]"
              name="Group187"
              placeholder="Search.."
              prefix={
                <Image
                  src={"images/img_vector_12.png"}
                  className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                  alt="Vector"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close1.svg"}
                    className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                    alt="Vector"
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <Button className="bg-bluegray_900 font-normal font-sourcesanspro mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[5%]">
              Search
            </Button>
          </Row>
          <Column className="absolute items-start justify-end left-[25%] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] w-[14%]">
            <Row className="items-center justify-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[89%]">
              <Image
                src={"images/img_vector_13.png"}
                className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain w-[11%]"
                alt="Vector"
              />
              <Text className="font-semibold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-deep_purple_400 w-[auto]">
                Employee Capablity
              </Text>
            </Row>
            <Column className="items-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Line className="bg-deep_purple_400 h-[2px] w-[100%]" />
            </Column>
          </Column>
        </Stack>
        <Column className="items-center lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[15px] xl:pr-[17px] pr-[20px] 3xl:pr-[24px] w-[100%]">
          <Column className="bg-white_A700 justify-start lg:pb-[47px] xl:pb-[54px] pb-[61px] 3xl:pb-[73px] lg:pt-[20px] xl:pt-[23px] pt-[26px] 3xl:pt-[31px] rounded-radius4 shadow-bs w-[100%]">
            <Text className="font-semibold lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              Employee Capablity List
            </Text>
            <Column className="items-start justify-start lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[95%]">
              <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-start lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Employee Capablity List
                </Text>
                <Text className="font-normal 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Experience level
                </Text>
                <Text className="font-normal ml-[105px] 3xl:ml-[126px] lg:ml-[81px] xl:ml-[93px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Education
                </Text>
                <Text className="font-normal lg:ml-[108px] xl:ml-[124px] ml-[140px] 3xl:ml-[168px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Expected salary
                </Text>
                <Text className="font-normal ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Capablity 4
                </Text>
                <Text className="font-normal lg:ml-[101px] xl:ml-[116px] ml-[131px] 3xl:ml-[157px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Capablity 5
                </Text>
                <Text className="font-normal lg:ml-[111px] xl:ml-[127px] ml-[143px] 3xl:ml-[171px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Action
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_14.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_15.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_16.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_17.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_18.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_19.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_20.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_21.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_22.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_23.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_24.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_25.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_26.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_27.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_28.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_29.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
                <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Cameron Williamson
                  </Text>
                  <Text className="font-normal 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Begginer
                  </Text>
                  <Text className="font-normal lg:ml-[107px] xl:ml-[122px] ml-[138px] 3xl:ml-[165px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    bachelor of engineering
                  </Text>
                  <Text className="font-normal lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    Capablity 3
                  </Text>
                  <Text className="font-normal xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Text className="font-normal lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                    -
                  </Text>
                  <Image
                    src={"images/img_vector_30.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[152px] xl:ml-[174px] ml-[196px] 3xl:ml-[235px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Image
                    src={"images/img_vector_31.png"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[1%]"
                    alt="Vector"
                  />
                </Row>
              </List>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EmployeeCapablityMappingPage;
