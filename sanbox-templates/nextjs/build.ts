
import { Template, defaultBuildLogger } from 'e2b'
import { template as nextJSTemplate } from './template'
import dotenv from 'dotenv'
dotenv.config()


Template.build(nextJSTemplate , "c0-build" , {
    cpuCount: 4,
    memoryMB: 4096,
    onBuildLogs: defaultBuildLogger(),
    apiKey:"e2b_e6d3726de19fcc683d959f82ca24278ef02abc7b"
})