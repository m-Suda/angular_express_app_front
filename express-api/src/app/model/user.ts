interface UserInterface {
    user_id: string;
    user_name: string;
    create_date: string;
    create_user: string;
    update_date: string;
    update_user: string;
}

export class User implements UserInterface {

    user_id: string;
    user_name: string;
    create_date: string;
    create_user: string;
    update_date: string;
    update_user: string;

    public constructor(init?: Partial<User>) {
        // error出てるけどPhpStormの問題らしい?
        Object.assign(this, init);
    }
}
