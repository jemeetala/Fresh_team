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

const EmployeeListPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-start justify-start mx-[auto] lg:pb-[22px] xl:pb-[25px] pb-[29px] 3xl:pb-[34px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:pl-[38px] xl:pl-[44px] pl-[50px] 3xl:pl-[60px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
            <Image
              src={"images/img_image2_3.png"}
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
            <Image
              src={"images/img_vector_37.png"}
              className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[1004px] ml-[1129px] 3xl:ml-[1355px] lg:ml-[878px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[2%]"
              alt="Vector"
            />
            <Button className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
              <Image
                src={"images/img_group99_3.png"}
                className="w-[72%] flex items-center justify-center"
                alt="Group99"
              />
            </Button>
          </Row>
        </header>
        <Stack className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] w-[100%]">
          <Row className="absolute bg-gray_101 border border-gray_300 border-solid items-center justify-end lg:pr-[38px] xl:pr-[44px] pr-[50px] 3xl:pr-[60px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[100%]">
            <Image
              src={"images/img_vector_38.png"}
              className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
              alt="Vector"
            />
            <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
              Dashboard
            </Text>
            <Image
              src={"images/img_vector_39.png"}
              className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[160px] xl:ml-[183px] ml-[206px] 3xl:ml-[247px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[1%]"
              alt="Vector"
            />
            <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
              Employee Capablity
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal font-sourcesanspro p-[0] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              WrapClassName="3xl:ml-[489px] 3xl:pl-[12px] 3xl:pr-[26px] 3xl:py-[12px] border border-gray_400 border-solid flex lg:ml-[317px] lg:pl-[7px] lg:pr-[17px] lg:py-[7px] ml-[408px] pl-[10px] pr-[22px] py-[10px] rounded-radius4 w-[25%] xl:ml-[362px] xl:pl-[8px] xl:pr-[19px] xl:py-[8px]"
              name="Group187"
              placeholder="Search.."
              prefix={
                <Image
                  src={"images/img_vector_40.png"}
                  className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                  alt="Vector"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close3.svg"}
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
          <Column className="absolute items-start justify-end left-[14%] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] w-[11%]">
            <Row className="items-center justify-start ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[86%]">
              <Image
                src={"images/img_vector_41.png"}
                className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain w-[16%]"
                alt="Vector"
              />
              <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-deep_purple_400 w-[auto]">
                Employee List
              </Text>
            </Row>
            <Column className="items-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Line className="bg-deep_purple_400 h-[2px] w-[100%]" />
            </Column>
          </Column>
        </Stack>
        <Column className="items-center lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] w-[100%]">
          <Column className="bg-white_A700 items-start justify-start lg:pb-[28px] xl:pb-[32px] pb-[36px] 3xl:pb-[43px] lg:pt-[19px] xl:pt-[22px] pt-[25px] 3xl:pt-[30px] rounded-radius4 shadow-bs w-[100%]">
            <Column className="items-center lg:mr-[30px] xl:mr-[34px] mr-[39px] 3xl:mr-[46px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] w-[97%]">
              <Row className="items-center justify-start w-[100%]">
                <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Employee Details
                </Text>
                <Button className="border border-bluegray_900 border-solid font-normal font-sourcesanspro 3xl:ml-[1047px] lg:ml-[678px] xl:ml-[775px] ml-[872px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[10%]">
                  Sync All Employee
                </Button>
                <Button
                  className="3xl:ml-[28px] 3xl:pl-[21px] 3xl:pr-[19px] 3xl:py-[9px] bg-bluegray_900 flex items-center justify-between lg:ml-[18px] lg:pl-[14px] lg:pr-[12px] lg:py-[6px] ml-[24px] pl-[18px] pr-[16px] py-[8px] rounded-radius4 text-center w-[13%] xl:ml-[21px] xl:pl-[16px] xl:pr-[14px] xl:py-[7px]"
                  leftIcon={
                    <Image
                      src={"images/img_vector_42.png"}
                      className="w-[10.67px] h-[10.67px] text-center lg:w-[8px] lg:h-[9px] xl:w-[9px] xl:h-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                      alt="Vector"
                    />
                  }
                >
                  <div className="bg-transparent font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700">
                    Add New Employee
                  </div>
                </Button>
              </Row>
            </Column>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[96%]"
              orientation="vertical"
            >
              <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-start my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Employee Name
                </Text>
                <Text className="font-normal lg:ml-[135px] xl:ml-[154px] ml-[174px] 3xl:ml-[208px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Designation
                </Text>
                <Text className="font-normal lg:ml-[155px] xl:ml-[177px] ml-[200px] 3xl:ml-[240px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Joining Date
                </Text>
                <Text className="font-normal lg:ml-[153px] xl:ml-[175px] ml-[197px] 3xl:ml-[236px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Last Name
                </Text>
                <Text className="font-normal lg:ml-[161px] xl:ml-[185px] ml-[208px] 3xl:ml-[249px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Email
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
              <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[59px] xl:pr-[67px] pr-[76px] 3xl:pr-[91px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Cameron
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Manager
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  01-07-2022
                </Text>
                <Text className="font-normal font-segoeui lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Williamson
                </Text>
                <Text className="font-normal font-sourcesanspro lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  cameron@gmail.com
                </Text>
              </Row>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EmployeeListPage;
