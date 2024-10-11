from agent_controller import AgentController
import runpod

def main():
    agent_controller = AgentController()
    runpod.serverless.start({"handler": agent_controller.get_response})


if __name__ == "__main__":
    main()