import { UserContainer, Avatar } from "./styles";

export function UserInfo() {
  const user = "Herlander Bento";

  function formatName() {
    const nameSplit = user.split(" ");

    if (nameSplit.length > 1) {
      return `${nameSplit[0].charAt(0)}${nameSplit[1].charAt(0)}`.toUpperCase();
    }
    return nameSplit[0].charAt(0).toUpperCase();
  }

  return (
    <UserContainer>
      <Avatar>{formatName()}</Avatar>
      <span>{user}</span>
    </UserContainer>
  );
}
