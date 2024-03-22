module.exports = {
	preset: 'ts-jest',
	moduleNameMapper: {
		'^@mock/(.*)$': '<rootDir>/tests/mock/$1',
		'^@src/(.*)$': '<rootDir>/src/$1',
	},
};
