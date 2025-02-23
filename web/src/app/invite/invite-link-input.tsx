'use client'

import { Copy, Link } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "../../components/input";
import { IconButton } from "@/components/icon-button";

type InviteLinkInputProps = {
    inviteLink: string;
}

export function InviteLinkInput(props: InviteLinkInputProps) {

    function handleCopyInviteLink() {
        navigator.clipboard.writeText(props.inviteLink);
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link size={20} />
            </InputIcon>
            <InputField
                type="url"
                readOnly
                defaultValue={props.inviteLink}
            />
            <IconButton className="-mr-2" onClick={handleCopyInviteLink}>
                <Copy size={20} />
            </IconButton>
        </InputRoot>
    );
}