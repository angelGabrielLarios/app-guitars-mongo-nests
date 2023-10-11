import axios, { AxiosInstance } from "axios";
import { HTTPAdapter } from "../interfaces/htt-adapter.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HTTPAdapter {

    private axios: AxiosInstance = axios
    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url)
            return data
        } catch (error) {
            throw new Error(`This a error !!! - Check logs in console`)
        }
    }
}