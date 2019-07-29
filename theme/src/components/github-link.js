/** @jsx jsx */
import { jsx, css } from 'theme-ui'
import GitHubLogo from '../../assets/github-logo.svg';
import theme from '../gatsby-plugin-theme-ui/index';

const GithubLink = ({url}) => (
  <div css={css({
    position: 'absolute',
    top: "20px",
    right: ["5px", "20px"],
    fontSize: 1,
    "& > a": {
      fontSize: "0px",
    },
    "& svg": {
      width: [24, 30],
      height: [24, 30],
      fill: theme.colors.primary,
      marginRight: 2,
      "& :hover": {
        opacity: "0.5",
      }
    },
  })}>
    <a href={url}>
      <GitHubLogo />
    </a>
  </div>
);

export default GithubLink;