/** @jsxImportSource @emotion/react */

// Components
import { css } from "@emotion/react";
import MuiBox from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import Brand from "../../../components/common/Brand";
import MuiTypography from "@material-ui/core/Typography";

import routes from "../../../config/routes";

const MainNavbar = () => {
    // States

    return (
        <MuiBox
            css={css`
                display: flex;
                align-items: center;
            `}
        >
            <Brand />
            <MuiBox
                css={css`
                    display: flex;
                    align-items: center;
                    margin-left: 1rem;
                    margin-right: 1rem;
                    padding-left: 1rem;
                    padding-right: 1rem;
                `}
            >
                {routes.map(({ path, label }, i) => (
                    <MuiLink
                        href={path}
                        key={i}
                        css={css`
                            margin-left: 0.5rem;
                            margin-right: 0.5rem;

                            &:first-child {
                                margin-left: 0;
                            }

                            &:last-child {
                                margin-right: 0;
                            }
                        `}
                    >
                        <MuiTypography
                            css={css`
                                color: #ffffff;
                            `}
                        >
                            {label}
                        </MuiTypography>
                    </MuiLink>
                ))}
            </MuiBox>
        </MuiBox>
    );
};

export default MainNavbar;
