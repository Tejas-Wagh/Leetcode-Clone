import bcrypt from 'bcrypt';

// Function to check if provided password matches the hashed password
export const verifyPassword = async (enteredPassword: string, storedHashedPassword: string): Promise<boolean> => {
  const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
  return isMatch;
};

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10; // Higher value means more secure but slower
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };