/** @jsxImportSource @emotion/react */

// Components
import { css } from "@emotion/react";

// Utils
import config from "../../config";

const Brand = () => (
    <span
        css={css`
            font-family: Open Sans;
        `}
    >
        {config.APP_NAME}
    </span>
);

export default Brand;
