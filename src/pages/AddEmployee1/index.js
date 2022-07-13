import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Input,
  Line,
  Datepicker,
  SelectBox,
} from "components";

const AddEmployee1Page = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-start justify-start mx-[auto] lg:pb-[104px] xl:pb-[119px] pb-[134px] 3xl:pb-[160px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:pl-[38px] xl:pl-[44px] pl-[50px] 3xl:pl-[60px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
            <Image
              src={"images/img_image2.png"}
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
            <Image
              src={"images/img_vector_2.png"}
              className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[1004px] ml-[1129px] 3xl:ml-[1355px] lg:ml-[878px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[2%]"
              alt="Vector"
            />
            <Button className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
              <Image
                src={"images/img_group99.png"}
                className="w-[72%] flex items-center justify-center"
                alt="Group99"
              />
            </Button>
          </Row>
        </header>
        <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-end lg:pr-[38px] xl:pr-[44px] pr-[50px] 3xl:pr-[60px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[100%]">
          <Image
            src={"images/img_vector_3.png"}
            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
            alt="Vector"
          />
          <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Dashboard
          </Text>
          <Image
            src={"images/img_vector_4.png"}
            className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[2%]"
            alt="Vector"
          />
          <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
            Employee List
          </Text>
          <Image
            src={"images/img_vector_5.png"}
            className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[29px] xl:ml-[33px] ml-[38px] 3xl:ml-[45px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[1%]"
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
                src={"images/img_vector_6.png"}
                className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                alt="Vector"
              />
            }
            suffix={
              inputvalue?.length > 0 ? (
                <Image
                  onClick={() => setInputvalue("")}
                  src={"images/close.svg"}
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
        <Column className="items-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:px-[365px] xl:px-[418px] px-[470px] 3xl:px-[564px] w-[100%]">
          <Column className="bg-white_A700 justify-start lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] rounded-radius4 shadow-bs w-[100%]">
            <Text className="font-semibold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              Add New Employee
            </Text>
            <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Column className="font-segoeui items-start w-[100%]">
                <Line className="bg-gray_300 h-[1px] w-[100%]" />
                <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                  First Name
                </Text>
              </Column>
              <Input
                className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
                WrapClassName="3xl:mt-[9px] 3xl:mx-[28px] border border-gray_400 border-solid lg:mt-[6px] lg:mx-[18px] mt-[8px] mx-[24px] rounded-radius4 w-[90%] xl:mt-[7px] xl:mx-[21px]"
                name="Group216"
                placeholder="Cameron"
              ></Input>
              <Column className="font-segoeui items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] w-[100%]">
                <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                  Last Name
                </Text>
              </Column>
              <Input
                className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
                WrapClassName="3xl:mt-[9px] 3xl:mx-[28px] border border-gray_400 border-solid lg:mt-[6px] lg:mx-[18px] mt-[8px] mx-[24px] rounded-radius4 w-[90%] xl:mt-[7px] xl:mx-[21px]"
                name="Group216"
                placeholder="Williamson"
              ></Input>
              <Column className="font-segoeui items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] w-[100%]">
                <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                  Email
                </Text>
              </Column>
              <Input
                className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
                WrapClassName="3xl:mt-[9px] 3xl:mx-[28px] border border-gray_400 border-solid lg:mt-[6px] lg:mx-[18px] mt-[8px] mx-[24px] rounded-radius4 w-[90%] xl:mt-[7px] xl:mx-[21px]"
                name="Group216"
                placeholder="cameron@gmail.com"
              ></Input>
              <Column className="font-segoeui items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] w-[100%]">
                <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                  Joining Date
                </Text>
              </Column>
              <Datepicker
                className="placeholder:bg-transparent bg-transparent font-normal font-sourcesanspro p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
                name="Group216"
                placeholder="01-08-2022"
              ></Datepicker>
              <Column className="font-segoeui items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] w-[100%]">
                <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                  Role Id
                </Text>
              </Column>
              <Input
                className="bg-transparent border-0 font-normal font-sourcesanspro not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900 text-black_900 w-[100%]"
                WrapClassName="3xl:mt-[9px] 3xl:mx-[28px] border border-gray_400 border-solid lg:mt-[6px] lg:mx-[18px] mt-[8px] mx-[24px] rounded-radius4 w-[90%] xl:mt-[7px] xl:mx-[21px]"
                name="Group216"
                placeholder="1234567890"
              ></Input>
              <Column className="font-segoeui items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] w-[100%]">
                <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                  Designation
                </Text>
              </Column>
              <SelectBox
                className="bg-transparent border border-gray_400 border-solid font-normal font-sourcesanspro lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[auto] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius4 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[90%]"
                placeholderClassName="bg-transparent text-black_900"
                name="Group216"
                placeholder="Jr. UI/UX Designer"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Image
                    src={"images/img_vector_8.png"}
                    className="w-[8.79px] h-[5.21px] mr-[17px] object-contain lg:w-[6px] lg:h-[5px] lg:mr-[13px] xl:w-[7px] xl:h-[5px] xl:mr-[15px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[20px]"
                    alt="Vector"
                  />
                }
              ></SelectBox>
              <Column className="items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Line className="bg-gray_300 h-[1px] w-[100%]" />
              </Column>
              <Column className="font-sourcesanspro items-end lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:pr-[18px] xl:pr-[21px] pr-[24px] 3xl:pr-[28px] w-[100%]">
                <Row className="items-center justify-end w-[45%]">
                  <Button className="border border-bluegray_900 border-solid font-normal not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[34%]">
                    Cancle
                  </Button>
                  <Button className="bg-bluegray_900 font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[55%]">
                    Add Employee
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AddEmployee1Page;
