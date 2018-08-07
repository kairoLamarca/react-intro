function Page(props) {
    const user = props.user;
    const userLink = (
        <Link href={user.permalink}>
            <Avatar user={user} size={props.avatarSize} />
        </Link>
    );
    return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} />
    // ... which renders ...
    <PageLayout userLink={...} />
    // ... which renders ...
    <NavigationBar userLink={...} />
  // ... which renders ...
  { props.userLink }