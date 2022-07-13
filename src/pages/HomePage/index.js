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

const HomePagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-start justify-start mx-[auto] lg:pb-[21px] xl:pb-[24px] pb-[28px] 3xl:pb-[33px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-start lg:pl-[38px] xl:pl-[44px] pl-[50px] 3xl:pl-[60px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
            <Image
              src={"images/img_image2_2.png"}
              className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
              alt="image2"
            />
            <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              FrashTeam
            </Text>
            <Image
              src={"images/img_vector_32.png"}
              className="lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[1004px] ml-[1129px] 3xl:ml-[1355px] lg:ml-[878px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[2%]"
              alt="Vector"
            />
            <Button className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
              <Image
                src={"images/img_group99_2.png"}
                className="w-[72%] flex items-center justify-center"
                alt="Group99"
              />
            </Button>
          </Row>
        </header>
        <Stack className="lg:h-[46px] xl:h-[52px] h-[58px] 2xl:h-[59px] 3xl:h-[70px] w-[100%]">
          <Row className="absolute bg-gray_101 border border-gray_300 border-solid h-[max-content] inset-y-[0] items-center justify-end my-[auto] lg:pr-[38px] xl:pr-[44px] pr-[50px] 3xl:pr-[60px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[100%]">
            <Image
              src={"images/img_vector_33.png"}
              className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain w-[2%]"
              alt="Vector"
            />
            <Text className="font-segoeui font-semibold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
              Employee List
            </Text>
            <Image
              src={"images/img_vector_34.png"}
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
              WrapClassName="3xl:ml-[479px] 3xl:pl-[12px] 3xl:pr-[26px] 3xl:py-[12px] border border-gray_400 border-solid flex lg:ml-[310px] lg:pl-[7px] lg:pr-[17px] lg:py-[7px] ml-[399px] pl-[10px] pr-[22px] py-[10px] rounded-radius4 w-[25%] xl:ml-[354px] xl:pl-[8px] xl:pr-[19px] xl:py-[8px]"
              name="Group187"
              placeholder="Search.."
              prefix={
                <Image
                  src={"images/img_vector_35.png"}
                  className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                  alt="Vector"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close2.svg"}
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
          <Column className="absolute items-start justify-end left-[3%] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] w-[10%]">
            <Row className="items-center justify-start lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mr-[14px] xl:mr-[16px] mr-[19px] 3xl:mr-[22px] w-[76%]">
              <Image
                src={"images/img_vector_36.png"}
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Vector"
              />
              <Text className="font-semibold xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-deep_purple_400 w-[auto]">
                Dashboard
              </Text>
            </Row>
            <Column className="items-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Line className="bg-deep_purple_400 h-[2px] w-[100%]" />
            </Column>
          </Column>
        </Stack>
        <Column className="items-center lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:px-[38px] xl:px-[44px] px-[50px] 3xl:px-[60px] w-[100%]">
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center justify-evenly xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
              <Column className="bg-white_A700 items-start lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] rounded-radius4 shadow-bs w-[51%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Candidte Funnel(All-time)
                </Text>
                <Column className="items-center lg:mr-[38px] xl:mr-[43px] mr-[49px] 3xl:mr-[58px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] pl-[1px] w-[93%]">
                  <Stack className="lg:h-[201px] xl:h-[230px] h-[258px] 2xl:h-[259px] 3xl:h-[310px] mx-[auto] w-[92%]">
                    <Row className="absolute items-center justify-evenly w-[100%]">
                      <Column className="items-start w-[65%]">
                        <Row className="items-center justify-start w-[53%]">
                          <Column className="items-start w-[36%]">
                            <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                              50%
                            </Text>
                            <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                              Screening
                            </Text>
                          </Column>
                          <Image
                            src={"images/img_line6.png"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] object-contain w-[57%]"
                            alt="Line6"
                          />
                        </Row>
                        <Row className="items-center justify-start lg:mt-[118px] xl:mt-[135px] mt-[152px] 3xl:mt-[182px] w-[53%]">
                          <Column className="items-start w-[36%]">
                            <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                              50%
                            </Text>
                            <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                              Screening
                            </Text>
                          </Column>
                          <Image
                            src={"images/img_line9.png"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] object-contain w-[57%]"
                            alt="Line9"
                          />
                        </Row>
                      </Column>
                      <Column className="items-start w-[35%]">
                        <Row className="items-center justify-start rotate-[-180deg] w-[100%]">
                          <Image
                            src={"images/img_line9_1.png"}
                            className="lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[57%]"
                            alt="Line9"
                          />
                          <Column className="items-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rotate-[-180deg] w-[25%]">
                            <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                              20%
                            </Text>
                            <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                              Hire
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-start lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
                          <Line className="bg-bluegray_100 h-[2px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] w-[57%]" />
                          <Column className="items-start xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[25%]">
                            <Text className="font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                              15%
                            </Text>
                            <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                              Offer
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] pr-[1px] rotate-[-180deg] w-[100%]">
                          <Image
                            src={"images/img_line9_2.png"}
                            className="lg:h-[21px] xl:h-[25px] h-[27px] 2xl:h-[28px] 3xl:h-[33px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[57%]"
                            alt="Line9"
                          />
                          <Column className="items-start w-[37%]">
                            <Text className="font-bold xl:ml-[1px] lg:ml-[1px] ml-[2px] rotate-[-180deg] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_600 w-[auto]">
                              15%
                            </Text>
                            <Text className="font-normal rotate-[-180deg] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                              Interviews
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Row>
                    <Image
                      src={"images/img_group190.png"}
                      className="absolute lg:h-[201px] xl:h-[230px] h-[258px] 2xl:h-[259px] 3xl:h-[310px] inset-x-[27%] object-contain lg:w-[200px] xl:w-[229px] w-[258px] 3xl:w-[309px]"
                      alt="Group190"
                    />
                  </Stack>
                  <Row className="items-start justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <div className="bg-blue_600 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Scurcing
                    </Text>
                    <div className="bg-blue_300 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Screening
                    </Text>
                    <div className="bg-blue_200 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Interviews
                    </Text>
                    <div className="bg-blue_100 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Offer
                    </Text>
                    <div className="bg-blue_50 lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] rounded-radius3 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"></div>
                    <Text className="font-normal mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Hire
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] rounded-radius4 shadow-bs w-[49%]">
                <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  How many candidates were procesed last week?
                </Text>
                <Column className="items-center lg:mr-[18px] xl:mr-[21px] mr-[24px] 3xl:mr-[28px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[96%]">
                  <Row className="items-start justify-start w-[100%]">
                    <Text className="font-normal leading-[normal] mb-[105px] 3xl:mb-[126px] lg:mb-[81px] xl:mb-[93px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] rotate-[-90deg] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 text-left w-[3%]">
                      Total Candidates
                    </Text>
                    <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                      <Column className="absolute items-center justify-start pl-[1px] w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            60
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            50
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            40
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            30
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            20
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            10
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            00
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                      </Column>
                      <Row className="absolute h-[max-content] inset-y-[0] items-end justify-start my-[auto] lg:pl-[5px] xl:pl-[6px] pl-[7px] 3xl:pl-[8px] right-[4%] w-[87%]">
                        <Column className="items-center justify-start lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] w-[21%]">
                          <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[30%]"></div>
                          <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Scurcing
                          </Text>
                        </Column>
                        <Column className="items-center justify-start w-[21%]">
                          <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] h-[233px] 2xl:h-[234px] 3xl:h-[280px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] w-[30%]"></div>
                          <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Screening
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] w-[25%]">
                          <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[25%]"></div>
                          <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Interviews
                          </Text>
                        </Column>
                        <Column className="h-[110px] 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] items-start justify-start lg:mt-[121px] xl:mt-[138px] mt-[156px] 3xl:mt-[187px] w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]">
                          <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] ml-[0] w-[29%]"></div>
                          <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Offer
                          </Text>
                        </Column>
                        <Column className="items-start justify-start lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[6%]">
                          <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] h-[215px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                          <Column className="items-center lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] xl:px-[2px] lg:px-[2px] px-[3px] w-[100%]">
                            <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                              Hire
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </Stack>
                  </Row>
                  <Text className="font-normal xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                    Stage
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-evenly xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
              <Column className="bg-white_A700 lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] rounded-radius4 shadow-bs w-[51%]">
                <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  How many candidates were procesed last week?
                </Text>
                <Row className="items-start justify-start mr-[auto] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[93%]">
                  <Text className="font-normal leading-[normal] mb-[105px] 3xl:mb-[126px] lg:mb-[81px] xl:mb-[93px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] rotate-[-90deg] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 text-left w-[3%]">
                    Total Candidates
                  </Text>
                  <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                    <Column className="absolute items-center justify-start pl-[1px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          60
                        </Text>
                        <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          50
                        </Text>
                        <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          40
                        </Text>
                        <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          30
                        </Text>
                        <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          20
                        </Text>
                        <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          10
                        </Text>
                        <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          00
                        </Text>
                        <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                      </Row>
                    </Column>
                    <Row className="absolute h-[max-content] inset-y-[0] items-end justify-start my-[auto] lg:pl-[5px] xl:pl-[6px] pl-[7px] 3xl:pl-[8px] right-[4%] w-[87%]">
                      <Column className="items-center justify-start lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] w-[21%]">
                        <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[30%]"></div>
                        <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          Scurcing
                        </Text>
                      </Column>
                      <Column className="items-center justify-start w-[21%]">
                        <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] h-[233px] 2xl:h-[234px] 3xl:h-[280px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] w-[30%]"></div>
                        <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          Screening
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] w-[25%]">
                        <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[25%]"></div>
                        <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          Interviews
                        </Text>
                      </Column>
                      <Column className="h-[110px] 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] items-start justify-start lg:mt-[121px] xl:mt-[138px] mt-[156px] 3xl:mt-[187px] w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]">
                        <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] ml-[0] w-[29%]"></div>
                        <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                          Offer
                        </Text>
                      </Column>
                      <Column className="items-start justify-start lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[6%]">
                        <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] h-[215px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                        <Column className="items-center lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] xl:px-[2px] lg:px-[2px] px-[3px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Hire
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Stack>
                </Row>
                <Text className="font-normal lg:ml-[227px] xl:ml-[259px] ml-[292px] 3xl:ml-[350px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Stage
                </Text>
              </Column>
              <Column className="bg-white_A700 items-start lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] rounded-radius4 shadow-bs w-[49%]">
                <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  How many candidates were procesed last week?
                </Text>
                <Column className="items-center lg:mr-[18px] xl:mr-[21px] mr-[24px] 3xl:mr-[28px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[96%]">
                  <Row className="items-start justify-start w-[100%]">
                    <Text className="font-normal leading-[normal] mb-[105px] 3xl:mb-[126px] lg:mb-[81px] xl:mb-[93px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] rotate-[-90deg] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 text-left w-[3%]">
                      Total Candidates
                    </Text>
                    <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                      <Column className="absolute items-center justify-start pl-[1px] w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            60
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            50
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            40
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            30
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            20
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            10
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                        <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[100%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            00
                          </Text>
                          <Line className="bg-gray_300 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
                        </Row>
                      </Column>
                      <Row className="absolute h-[max-content] inset-y-[0] items-end justify-start my-[auto] lg:pl-[5px] xl:pl-[6px] pl-[7px] 3xl:pl-[8px] right-[4%] w-[87%]">
                        <Column className="items-center justify-start lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] w-[21%]">
                          <div className="bg-blue_600 lg:h-[151px] xl:h-[173px] h-[194px] 2xl:h-[195px] 3xl:h-[233px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[30%]"></div>
                          <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Scurcing
                          </Text>
                        </Column>
                        <Column className="items-center justify-start w-[21%]">
                          <div className="bg-blue_600 lg:h-[182px] xl:h-[208px] h-[233px] 2xl:h-[234px] 3xl:h-[280px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] w-[30%]"></div>
                          <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Screening
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] w-[25%]">
                          <div className="bg-blue_600 lg:h-[121px] xl:h-[138px] h-[155px] 2xl:h-[156px] 3xl:h-[187px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[25%]"></div>
                          <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Interviews
                          </Text>
                        </Column>
                        <Column className="h-[110px] 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] items-start justify-start lg:mt-[121px] xl:mt-[138px] mt-[156px] 3xl:mt-[187px] w-[110px] 3xl:w-[132px] lg:w-[85px] xl:w-[97px]">
                          <div className="bg-blue_600 lg:h-[60px] xl:h-[69px] h-[77px] 2xl:h-[78px] 3xl:h-[93px] ml-[0] w-[29%]"></div>
                          <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                            Offer
                          </Text>
                        </Column>
                        <Column className="items-start justify-start lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[6%]">
                          <div className="bg-blue_600 lg:h-[168px] xl:h-[192px] h-[215px] 2xl:h-[216px] 3xl:h-[259px] w-[100%]"></div>
                          <Column className="items-center lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] xl:px-[2px] lg:px-[2px] px-[3px] w-[100%]">
                            <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                              Hire
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </Stack>
                  </Row>
                  <Text className="font-normal xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                    Stage
                  </Text>
                </Column>
              </Column>
            </Row>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default HomePagePage;
