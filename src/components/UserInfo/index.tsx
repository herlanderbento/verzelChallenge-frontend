import { UserContainer, Avatar } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export function UserInfo() {
  const { user } = useAuth();

  function formatName() {
    const nameSplit = user?.name.split(" ");

    if (nameSplit.length > 1) {
      return `${nameSplit[0].charAt(0)}${nameSplit[1].charAt(0)}`.toUpperCase();
    }
    return nameSplit[0].charAt(0).toUpperCase();
  }

  return (
    <UserContainer>
      <Avatar>{formatName()}</Avatar>
      <span>{user?.name}</span>
    </UserContainer>
  );
}
