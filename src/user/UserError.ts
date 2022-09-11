import { ApolloError } from "apollo-server-errors";

export class UserError extends ApolloError {
  constructor({ message, code, extension }) {
    super(message, code);
  }
}
