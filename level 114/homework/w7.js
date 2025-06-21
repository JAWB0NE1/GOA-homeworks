const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob",   email: "bob@example.com" },
  { name: "Eve",   email: "eve@example.com" }
];

const formattedEmails = users.map(user => `<${user.email}>`);

console.log(formattedEmails);
