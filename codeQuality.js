// level {1/2/3}
  const getUser = async () => {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
    let [user,Profile,p] = doc;
    const userProfile = {
      user: user,
      profile: Profile,
      posts: p
    };
    return userProfile;
  }