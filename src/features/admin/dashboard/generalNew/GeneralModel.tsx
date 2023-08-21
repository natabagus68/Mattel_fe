import moment from "moment";
import { useEffect, useState } from "react";
import {
    useGetHourlytrendQuery,
    useGetRepairTimeQuery,
    useGetResponeTimeQuery,
    useGetTopFiveLineDownTimeQuery,
    useGetTopFiveMachineDownTimeQuery,
    useGetTopFiveRepairSumQuery,
    useGetTopFiveResponseAVGQuery,
    useGetTopFiveResponseSUMQuery,
} from "../../../../app/services/dashboardservice";

export default function useGeneralModel() {
    const [shiftData, setShiftData] = useState("");
    const initialObject = {
        startDate: null,
        endDate: null,
    };
    const [responseAVG, setResponseAVG] = useState(initialObject);
    const [responseSUM, setResponseSUM] = useState(initialObject);
    const [repairAVG, setRepairAVG] = useState(initialObject);
    const [repairSUM, setRepairSUM] = useState(initialObject);
    const [topFiveMachine, setTopFiveDownTime] = useState(initialObject);
    const [topFiveLineDownTime, setTopLineDownTime] = useState(initialObject);

    const { data: getResponseSUM } = useGetTopFiveResponseSUMQuery(responseSUM);
    const { data: getRepairSUM } = useGetTopFiveRepairSumQuery(repairSUM);
    const { data: getResponseAVG } = useGetTopFiveResponseAVGQuery(responseAVG);
    const { data: getRepairAVG } = useGetTopFiveResponseAVGQuery(repairAVG);
    const { data: getDownTimeTrend } = useGetHourlytrendQuery();
    const { data: getTopFiveMachineDownTime } =
        useGetTopFiveMachineDownTimeQuery(topFiveMachine);
    const { data: getTopFiveLineDownTime } =
        useGetTopFiveLineDownTimeQuery(topFiveLineDownTime);
    const { data: responeTime } = useGetResponeTimeQuery();
    const { data: repairTime } = useGetRepairTimeQuery();
    // change value datepicker

    const changeTopFiveMachineDownTime = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTopFiveDownTime((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const changeTopLineDownTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopLineDownTime((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const changeDateResponseAVG = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResponseAVG((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const changeDateResponseSUM = (e: React.ChangeEvent<HTMLInputElement>) =>
        setResponseSUM((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    const changeDateRepairAVG = (e: React.ChangeEvent<HTMLInputElement>) =>
        setRepairAVG((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    const changeDateRepairSUM = (e: React.ChangeEvent<HTMLInputElement>) =>
        setRepairSUM((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });

    const handleShift = () => {
        const currentTime = moment();
        const shift1Start = moment().set({ hour: 22, minute: 40 });
        const shift1Continues = moment().set({ hour: 0, minute: 0 });
        const shift2Start = moment().set({ hour: 7, minute: 10 });
        const shift3Start = moment().set({ hour: 15, minute: 40 });

        if (
            (currentTime.isAfter(shift1Start) &&
                currentTime.isBefore(shift2Start)) ||
            (currentTime.isAfter(shift1Continues) &&
                currentTime.isBefore(shift2Start)) ||
            currentTime.isSame(shift1Start)
        ) {
            setShiftData("Shift 1");
        } else if (
            (currentTime.isAfter(shift2Start) &&
                currentTime.isBefore(shift3Start)) ||
            currentTime.isSame(shift2Start)
        ) {
            setShiftData("Shift 2");
        } else if (
            (currentTime.isAfter(shift3Start) &&
                currentTime.isBefore(shift1Start)) ||
            currentTime.isSame(shift3Start)
        ) {
            setShiftData("Shift 3");
        } else {
            // If none of the shifts match, return a default value
            setShiftData("Unknown Shift");
        }
    };

    useEffect(() => {
        handleShift();
    }, []);

    return {
        shiftData,
        getResponseSUM,
        getRepairSUM,
        getResponseAVG,
        getRepairAVG,
        getDownTimeTrend,
        getTopFiveMachineDownTime,
        getTopFiveLineDownTime,
        responeTime,
        repairTime,
        changeDateResponseAVG,
        changeDateResponseSUM,
        changeDateRepairAVG,
        changeDateRepairSUM,
        changeTopFiveMachineDownTime,
        changeTopLineDownTime,
        responseAVG,
        responseSUM,
        repairAVG,
        repairSUM,
        topFiveMachine,
        topFiveLineDownTime,
    };
}
