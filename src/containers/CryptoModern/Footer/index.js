import Box from 'common/components/Box';
// import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
// import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import FooterWrapper, { List, ListItem } from './footer.style';


const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoModernJson {
        FooterData {
          title
          menuItems {
            text
            url
          }
        }
      }
    }
  `);
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          {/* <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text content="hello@redq.io" {...textStyle} />
            <Text content="+479-443-9334" {...textStyle} />
          </Box> */}
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {Data.cryptoModernJson.FooterData.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <a href={item.url} className="ListItem">
                        {item.text}
                      </a>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    justifyContent: 'center'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
    justifyContent: 'center'
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
    justifyContent: 'center'
  },
  // widget title default style
  titleStyle: {
    color: 'black',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    //color: '#B2FFB2',
    color: '#80d780',
    fontSize: '16px',
    mb: '10px',
    fontWeight: '300',
  },
};

export default Footer;
