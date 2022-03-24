/** @jsxImportSource @emotion/react */
import { useMemo, useState } from "react";

// Components
import { css } from "@emotion/react";
import MuiBox from "@material-ui/core/Box";
import MuiGrid from "@material-ui/core/Grid";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiButton from "@material-ui/core/Button";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiContainer from "@material-ui/core/Container";
import MuiTypography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/core/styles";
import ActivitySummaryItem from "../../../components/common/Activity/ActivitySummaryItem";
import MainNavbar from "./MainNavbar";

const MainHeader = () => {
    const theme = useTheme();

    // States
    const [name, setName] = useState("Jasmine");

    const activitySummaries = useMemo(() => {
        return [
            {
                label: "Due this week",
                count: 330,
                color: "#376FEE",
            },
            {
                label: "Completed",
                count: 240,
                color: "#5DC110",
            },
            {
                label: "Overdue",
                count: 33,
                color: "#EF4343",
            },
        ];
    }, []);

    return (
        <MuiBox>
            <MuiAppBar position="relative">
                <MuiToolbar>
                    <MainNavbar />
                </MuiToolbar>
            </MuiAppBar>

            <MuiBox
                css={css`
                    color: #ffffff;
                    padding: 2rem 0;
                    background-color: ${theme.palette.secondary.main};
                `}
            >
                <MuiContainer>
                    <MuiGrid container>
                        <MuiGrid item xl={6}>
                            <MuiTypography
                                css={css`
                                    font-size: 1.5rem;
                                    font-weight: bold;
                                    margin-bottom: 2rem;
                                `}
                            >
                                Welcome back, {name}
                            </MuiTypography>

                            <MuiTypography
                                css={css`
                                    color: #99a6bf;
                                    font-weight: bold;
                                `}
                            >
                                WEEK 4 ACTIVITY SUMMARY
                            </MuiTypography>
                            <MuiBox
                                css={css`
                                    display: flex;
                                `}
                            >
                                {activitySummaries.map((item, i) => (
                                    <ActivitySummaryItem
                                        key={i}
                                        label={item.label}
                                        count={item.count}
                                        badgeColor={item.color}
                                    />
                                ))}
                            </MuiBox>
                        </MuiGrid>
                        <MuiGrid
                            item
                            xl={6}
                            css={css`
                                display: flex;
                                align-items: center;
                                justify-content: flex-end;
                            `}
                        >
                            <MuiButton
                                variant="outlined"
                                css={css`
                                    color: #ffffff;
                                    border-color: #ffffff;
                                `}
                            >
                                My Calendar
                            </MuiButton>
                            <MuiButton
                                variant="outlined"
                                css={css`
                                    color: #ffffff;
                                    margin-left: 0.5rem;
                                    margin-right: 0.5rem;
                                    border-color: #ffffff;
                                `}
                            >
                                Weekly Report
                            </MuiButton>
                            <MuiButton
                                variant="contained"
                                css={css`
                                    color: #ffffff;
                                    background-color: #3972f5;
                                `}
                            >
                                + Assign Activity
                            </MuiButton>
                        </MuiGrid>
                    </MuiGrid>
                </MuiContainer>
            </MuiBox>
        </MuiBox>
    );
};

export default MainHeader;
