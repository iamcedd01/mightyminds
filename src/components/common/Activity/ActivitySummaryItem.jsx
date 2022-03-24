/** @jsxImportSource @emotion/react */

// Components
import { css } from "@emotion/react";
import MuiTypography from "@material-ui/core/Typography";

const ActivitySummaryItem = ({ label, count, badgeColor = "#376FEE" }) => {
    return (
        <MuiTypography
            css={css`
                display: flex;
                align-items: center;
                margin-left: 0.25rem;
                margin-right: 0.25rem;

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }
            `}
        >
            <span
                css={css`
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    margin-right: 0.25rem;
                    display: inline-block;
                    background-color: ${badgeColor};
                `}
            ></span>
            {label}: {count}
        </MuiTypography>
    );
};

export default ActivitySummaryItem;
