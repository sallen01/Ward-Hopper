CREATE TABLE WARD (
    WARD_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    WARD_NAME VARCHAR(128) NOT NULL,
    WARD_ADDRESS VARCHAR(128) NOT NULL,
    MEET_TIME VARCHAR(128) NOT NULL,
    OVERALL DECIMAL(2, 1),
    ACTIVITIES DECIMAL(2, 1),
    FOOD DECIMAL(2, 1),
    BISHOP DECIMAL(2, 1),
    GENDER_RATIO DECIMAL(2, 1),
    LOCATION DECIMAL(2, 1),
    SPIRITUALITY DECIMAL(2, 1),
    CREATED_DATE DATETIME NOT NULL,
    UPDATED_DATE DATETIME NOT NULL
);