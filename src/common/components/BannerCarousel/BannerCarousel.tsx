import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import Button from 'common/components/Button';
import { BannerWrapper } from './bannerCarousel.style';
import Carousel from 'react-bootstrap/esm/Carousel';
import { StyledFlexColumn, StyledFlexStart } from 'common/styles/common.styles';
import ModalContainer from 'containers/ModalContainer';
import useModal from 'hooks/useModal';

type Props = {
    bgImg: string[];
}
const BannerCarousel: React.FC<Props> = (props) => {
    const { isShowing: isShowingModal, toggle: toggleModal } = useModal();

    return(
        <>
            <BannerWrapper>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.bgImg[0]}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <StyledFlexColumn justifyContent="center" className="color-white banner-header">
                            <div className="heading">Create a branded dollar for your community</div>

                            <div className="sub-heading mt-40">With ICHI, every community gets their own token worth $1. It is minted with each community's cryptocurrency. It is redeemable 1-for-1 for USD Coin (USDC).</div>

                            <div className="btn-group mt-40">
                                <Button className="text primary-button" title="Enter App" onClick={toggleModal} />
                                <OutboundLink target="_blank" href="https://docs.ichi.farm/ichi/where-to-get-ichi" className="ml-10">
                                    <Button className="text secondary-button" title="Get ICHI" />
                                </OutboundLink>
                            </div>
                            </StyledFlexColumn>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={props.bgImg[1]}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <StyledFlexColumn justifyContent="center" className="color-white banner-header">
                            <div className="heading">Angel Liquidity Vaults built for Crypto Communities and LPs</div>

                            <div className="sub-heading mt-40">With Angel Vaults, Crypto Communities can build treasuries of project owned liquidity and provide LPs with single-sided deposits to Uniswap v3 without the need to manage their position.</div>

                            <div className="btn-group mt-40">
                                <Button className="text primary-button" title="Enter App" onClick={toggleModal} />
                                <OutboundLink target="_blank" href="https://docs.ichi.farm/ichi/where-to-get-ichi" className="ml-10">
                                    <Button className="text secondary-button" title="Get ICHI" />
                                </OutboundLink>
                            </div>
                            </StyledFlexColumn>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </BannerWrapper>

            <ModalContainer
                key="Modal"
                isShowing={isShowingModal}
                toggle={() => toggleModal()}
            />
        </>
    )
}

export default BannerCarousel;
