import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Text,
  Line,
  Input,
  Datepicker,
  Image,
  SelectBox,
  Row,
  Button,
} from "components";

const AddEmployeeModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[35%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
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
                    src={"images/img_vector_1.png"}
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
        </div>
      </ModalProvider>
    </>
  );
};

export default AddEmployeeModal;
