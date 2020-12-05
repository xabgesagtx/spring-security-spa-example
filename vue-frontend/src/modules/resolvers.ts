import {NavigationGuard, NavigationGuardNext, Route} from "vue-router";
import {HelloWordService} from "@/modules/hello-word-service";
import {Unauthorized} from "@/types/unauthorized";

const helloWordService = new HelloWordService();

export async function helloResolverGuard(to: Route, from: Route, next: NavigationGuardNext) {
    try {
        const message = await helloWordService.getMessage();
        to.meta.hello = message.hello
        next()
    } catch (e) {
        if (e instanceof Unauthorized) {
            next({name: 'Login', query: { redirectFrom: to.fullPath}})
        } else {
            throw e
        }
    }
}