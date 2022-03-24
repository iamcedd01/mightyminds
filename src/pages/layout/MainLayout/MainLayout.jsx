/** @jsxImportSource @emotion/react */

// Components
import { css } from "@emotion/react";
import MuiBox from "@material-ui/core/Box";
import MainHeader from "./MainHeader";

const MainLayout = ({ children }) => {
    return (
        <MuiBox>
            <MainHeader />
            <main
                css={css`
                    padding: 2rem;
                `}
            >
                {children}
            </main>
        </MuiBox>
    );
};

export default MainLayout;
