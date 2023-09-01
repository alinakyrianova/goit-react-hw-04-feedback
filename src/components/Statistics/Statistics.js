import React from "react";
import {
    StatsWrapper,
    Text,
    PartText
} from "./Statistics.styled";

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <StatsWrapper>
            <Text>
                <PartText>Good:</PartText> {good}
            </Text>
            <Text>
                <PartText>Neutral:</PartText> {neutral}
            </Text>
            <Text>
                <PartText>Bad:</PartText> {bad}
            </Text>
            <Text>
                <PartText>Total:</PartText> {total}
            </Text>
            <Text>
                <PartText>Positive Feedback Percentage:</PartText>{' '}
                {positivePercentage} %
            </Text>
        </StatsWrapper>
    );
};