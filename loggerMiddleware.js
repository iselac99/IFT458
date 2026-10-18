// Student Name: Isela Cruz
// Course: IFT 458
// Date: 10-17-2026

const express = require('express');
const app = express();
const PORT = 3000;

// ============================================
//             Logger Middleware
// This runs for EVERY request that comes in
// ============================================
const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
    
    next();
};

module.exports = loggerMiddleware;