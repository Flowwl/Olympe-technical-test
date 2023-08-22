import { formatDuration } from "./formatDuration";

describe('formatDuration', () => {
    it("should return duration formatted", () => {
        const twoMinutesTwentyThreeSeconds = 143;

        const res = formatDuration(twoMinutesTwentyThreeSeconds);

        expect(res).toEqual("2:23")
    })
    it("should return duration formatted when duration is zero", () => {
        const zero = 0;

        const res = formatDuration(zero);

        expect(res).toEqual("0:00")
    })
});
