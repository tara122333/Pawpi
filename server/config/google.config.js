// Libraries
import dotenv from "dotenv";
import { UserModel } from '../database/Users';
import googleAuth from 'passport-google-oauth20';

const GoogleStrategy = googleAuth.Strategy;

export default (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `/auth/google/callback`,
    },
        async (accessToken, refreshToken, profile, done) => {
            // creating a new user object
            const newUser = {
                fullname:profile.displayName,
                email:profile.emails[0].value,
                profilePic : profile.photos[0].value,
                verified : true,
            };
            try {
                // check if the user exist
                // console.log(newUser);
                const user = await UserModel.findOne({ email: newUser.email });
                console.log(user);
                if (user) {
                    // generate token
                    const token = user.generateJwtToken();
                    // return user
                    done(null, { user, token });
                }
                else {
                    // create new user
                    const user = await UserModel.create(newUser);
                    // generate token
                    const token = user.generateJwtToken();
                    // console.log(token);
                    // return user
                    done(null, { user,token });
                }

            } catch (error) {
                done(error, null);
            }

        }
    )
    );
    passport.serializeUser((userData, done) => done(null, { ...userData }));
    passport.deserializeUser((id, done) => done(null, id));
};