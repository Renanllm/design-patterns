
**Requirements:**

1. There are three types of units: Soldier, Archer, and Knight.
2. Factions can create their own armies with specific units.
3. Units should have common methods, such as "attack" and "move."

**Test Cases:**

1. **Creating Army for FactionA:**

   - Create an instance of the "FactionA" faction.
   - Add a Soldier to the army of "FactionA."
   - Add two Archers to the army of "FactionA."
   - Add a Knight to the army of "FactionA."
   - Verify that the army of "FactionA" has the correct units.
2. **Creating Army for FactionB:**

   - Create an instance of the "FactionB" faction.
   - Add two Soldiers to the army of "FactionB."
   - Add an Archer to the army of "FactionB."
   - Add a Knight to the army of "FactionB."
   - Verify that the army of "FactionB" has the correct units.
3. **Actions of Units:**

   - Create a Soldier and a Knight.
   - Execute the "attack" action for each unit and verify that the correct message is displayed.
   - Execute the "move" action for each unit and verify that the correct message is displayed.

**Problem that can be solved with Factory Method:**

The need to create armies for different factions and types of units can be simplified with the use of the Factory Method. Each faction can have its own unit factory that implements the Factory Method to create specific instances of units. This helps encapsulate the logic of unit creation, allowing for the addition of new unit types without modifying existing logic.

Without the implementation of the Factory Method, the logic for creating units may be scattered throughout the code, making it less flexible for adding new unit types or factions in the future. The Factory Method helps address this issue by providing a common interface for object creation while allowing subclasses to decide which objects to create.
