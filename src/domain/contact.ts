// Database Model expected by the project.
//
// {
// 	 id                   Int
//   phoneNumber          String?
//   email                String?
//   linkedId             Int? // the ID of another Contact linked to this one
//   linkPrecedence       "secondary"|"primary" // "primary" if it's the first Contact in the link
//   createdAt            DateTime
//   updatedAt            DateTime
//   deletedAt            DateTime?
// }
//
// NOTE: We have removed fields in domain model which are not necesaary
// for the domain logic.
// - `linkPrecedence` can be derived from `linkedId`
// - `updatedAt`, and `deletedAt` can be directly managed by db
// - `createdAt` is needed because we need it to decide which contact to make
//   primary in case of merge.

export type ContactData = {
  phoneNumber?: String;
  email?: String;
  linkedId?: number;
};

export type Contact = {
  id: number;
  createdAt: Date;
} & ContactData;
