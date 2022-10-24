import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf, colorize } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const timeFormat = `YYYY-MM-DD HH:mm:ss`;

const logger = createLogger({
    format: combine(
        label({ label: 'LOG'}),
        timestamp({
            format: timeFormat
        }),
        myFormat,
        colorize({
            all: true
        }),
    ),
    transports: [
        new transports.Console({
            level: 'info',
            eol: '\r\n', 
        }),
        new transports.File({
            filename: './hw-23/src/support/log/tests.log',
            level: 'info',
            options: { flags: 'w' }
        }),
    ]
});

export {
    logger
}