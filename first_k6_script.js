import http from 'k6/http';
import {sleep} from 'k6';
import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export default function(){

    const response = http.get('https://test.k6.io');

    check(response, {
        'status is 200':(r) => r.status === 200,
    }),
    sleep(1)
}

export function handleSummary(data) {
    return {
        "report.html": htmlReport(data),
    };
}
